<?php

namespace Gabrielesbaiz\NovaChangelog;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;
use Illuminate\Http\Request;
use Laravel\Nova\Menu\MenuSection;

class NovaChangelog extends Tool
{
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
     * Build the menu that renders the navigation links for the tool.
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
