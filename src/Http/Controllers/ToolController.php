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

        $crawledNodes = (new Crawler($html))->filter('h2, h3, li')->each(function ($node, $i) {
            return $node->nodeName();
        });

        $crawledHtml = (new Crawler($html))->filter('h2, h3, li')->each(function ($node, $i) {
            return $node->html();
        });

        $data = [];

        $h2Key = -1;

        foreach ($crawledNodes as $crawledNodeKey => $crawledNode) {
            if ($crawledNode == 'h2') {
                $crawledNodeKeyH2 = $crawledNodeKey;

                $h2Key++;

                $h3Key = -1;

                preg_match('/^(.*?)\s\((.*?)\)/', $crawledHtml[$crawledNodeKeyH2], $h2Title);

                $data[$h2Key]['title'] = $h2Title[1];
                $data[$h2Key]['date'] = $h2Title[2];
            }

            if ($crawledNode == 'h3') {
                $crawledNodeKeyH3 = $crawledNodeKey;

                $h3Key++;

                $liKey = -1;

                $data[$h2Key]['components'][$h3Key]['subTitle'] = $crawledHtml[$crawledNodeKeyH3];
            }

            if ($crawledNode == 'li') {
                $crawledNodeKeyLi = $crawledNodeKey;

                $liKey++;

                $data[$h2Key]['components'][$h3Key]['list'][$liKey] = $crawledHtml[$crawledNodeKeyLi];
            }
        }

        return $data;
    }
}
