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
    public function index()
    {
        $changelogFile = base_path() . '/changelog.md';

        if (! file_exists($changelogFile)) {
            file_put_contents($changelogFile, '## [Unreleased]');
        }

        $changelogMarkdown = file_get_contents($changelogFile);

        $environment = Environment::createCommonMarkEnvironment();

        $environment->addExtension(new TableExtension);

        $converter = new CommonMarkConverter([
            'allow_unsafe_links' => false,
        ], $environment);

        $html = (string) new HtmlString($converter->convertToHtml($changelogMarkdown));

        $crawledNodes = (new Crawler($html))->filter('h2, h3, li')->each(fn ($node) => $node->nodeName());

        $crawledHtml = (new Crawler($html))->filter('h2, h3, li')->each(fn ($node) => $node->html());

        $data = [];

        $h2Key = -1;

        foreach ($crawledNodes as $key => $node) {
            if ($node === 'h2') {
                $h2Key++;

                $h3Key = -1;

                preg_match('/^(.*?)\s\((\d{2})\.(\d{2})\.(\d{4})\)/', $crawledHtml[$key], $h2Title);

                $version = $h2Title[1] ?? 'Unknown';

                $year = $h2Title[4] ?? date('Y');

                $data[$year][$h2Key]['title'] = $version;

                $data[$year][$h2Key]['date'] = "{$h2Title[2]}.{$h2Title[3]}.{$h2Title[4]}";
            }

            if ($node === 'h3') {
                $h3Key++;

                $liKey = -1;

                $data[$year][$h2Key]['components'][$h3Key]['subTitle'] = $crawledHtml[$key];
            }

            if ($node === 'li') {
                $liKey++;

                $data[$year][$h2Key]['components'][$h3Key]['list'][$liKey] = $crawledHtml[$key];
            }
        }

        return $data;
    }
}
