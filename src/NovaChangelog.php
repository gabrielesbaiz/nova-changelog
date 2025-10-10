<?php

namespace Gabrielesbaiz\NovaChangelog;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;
use Illuminate\Http\Request;
use Laravel\Nova\Menu\MenuSection;

class NovaChangelog extends Tool
{
    /**
     * Changelog file path.
     *
     * @var string|null
     */
    protected ?string $changelogPath = null;

    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('nova-changelog', __DIR__ . '/../dist/js/tool.js');

        Nova::style('nova-changelog', __DIR__ . '/../dist/css/tool.css');
    }

    /**
     * Define the changelog path.
     *
     * @param  string $path
     * @return self
     */
    public function changelogPath(string $path): self
    {
        $this->changelogPath = $path;

        config(['nova-changelog.path' => $path]);

        return $this;
    }

    /**
     * Build the menu.
     *
     * @param  Request $request
     * @return mixed
     */
    public function menu(Request $request)
    {
        return MenuSection::make('Nova Changelog')
            ->path('/nova-changelog')
            ->icon('server');
    }
}
