<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Paginator::useBootstrapThree();
        $this->loadJsonTranslationsFrom(resource_path('js/locales'));

        if (\Storage::disk('local')->has('database_created') && Schema::hasTable('abilities')) {
            $this->addMenus();
        }
    }

    public function addMenus()
    {
        //main menu
        \Menu::make('main_menu', function ($menu) {
            foreach (config('crater.main_menu') as $data) {
                $this->generateMenu($menu, $data);
            }
        });

        //setting menu
        \Menu::make('setting_menu', function ($menu) {
            foreach (config('crater.setting_menu') as $data) {
                $this->generateMenu($menu, $data);
            }
        });
    }

    public function generateMenu($menu, $data)
    {
        $menu->add($data['title'], $data['link'])
            ->data('icon', $data['icon'])
            ->data('name', $data['name'])
            ->data('owner_only', $data['owner_only'])
            ->data('ability', $data['ability'])
            ->data('model', $data['model'])
            ->data('group', $data['group']);
    }
}
