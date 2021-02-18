<?php

use App\Passport;
use App\User;
use Illuminate\Database\Seeder;

class PassportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $users = [];
    public function run()
    {
        factory(Passport::class, 20)
            ->make()
            ->each(function ($pass) {
                $user = User::inRandomOrder()->first();

                if (!in_array($user->id, $this->users)) {

                    $pass->user()->associate($user); //associo l' user al post
                    $this->users[] = $user->id; //pusho user con id univoco nell array finale
                    $pass->save(); //salvo il post nel db
                }
                // dd($this->users, $user);
            });
    }
}
