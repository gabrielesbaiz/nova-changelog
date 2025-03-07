<?php

namespace Gabrielesbaiz\NovaChangelog\Http\Middleware;

use Closure;
use Laravel\Nova\Nova;
use Gabrielesbaiz\NovaChangelog\NovaChangelog;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request                $request
     * @param  Closure(\Illuminate\Http\Request):mixed $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        $tool = collect(Nova::registeredTools())->first([$this, 'matchesTool']);

        return $tool?->authorize($request)
            ? $next($request)
            : abort(403);
    }

    /**
     * Determine whether this tool belongs to the package.
     *
     * @param  \Laravel\Nova\Tool $tool
     * @return bool
     */
    public function matchesTool($tool)
    {
        return $tool instanceof NovaChangelog;
    }
}
