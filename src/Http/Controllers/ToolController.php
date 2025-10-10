<?php

namespace Gabrielesbaiz\NovaChangelog\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\HtmlString;
use Symfony\Component\DomCrawler\Crawler;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\Table\TableExtension;

class ToolController extends Controller
{
    /**
     * Handle changelog rendering.
     *
     * @return array
     */
    public function index(): array
    {
        $changelogFile = config('nova-changelog.path', base_path('changelog.md'));

        if (! is_file($changelogFile)) {
            file_put_contents($changelogFile, '## [Unreleased]');
        }

        $markdown = file_get_contents($changelogFile);

        $converter = new CommonMarkConverter(
            ['allow_unsafe_links' => false],
            tap(Environment::createCommonMarkEnvironment(), fn ($env) => $env->addExtension(new TableExtension))
        );

        $html = (string) new HtmlString($converter->convertToHtml($markdown));

        $crawler = new Crawler($html);

        $nodes = $crawler->filter('h2, h3, li');

        if ($nodes->count() === 0) {
            return [];
        }

        $data = [];
        $h2Key = -1;
        $h3Key = -1;
        $year = date('Y');

        foreach ($nodes as $node) {
            $name = $node->nodeName;
            $content = trim($node->textContent);

            if ($name === 'h2') {
                $h2Key++;
                $h3Key = -1;

                if (preg_match('/^(.*?)\s\((\d{2})\.(\d{2})\.(\d{4})\)/', $content, $matches)) {
                    $version = $matches[1];
                    $year = $matches[4];
                    $date = "{$matches[2]}.{$matches[3]}.{$matches[4]}";
                } else {
                    $version = 'Unknown';
                    $date = 'Unknown';
                }

                $data[$year][$h2Key] = [
                    'title' => $version,
                    'date' => $date,
                    'components' => [],
                ];

                continue;
            }

            if ($name === 'h3') {
                $h3Key++;
                $data[$year][$h2Key]['components'][$h3Key] = [
                    'subTitle' => $content,
                    'list' => [],
                ];

                continue;
            }

            if ($name === 'li') {
                $data[$year][$h2Key]['components'][$h3Key]['list'][] = $content;
            }
        }

        return $data;
    }
}
