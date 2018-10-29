<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $MAX_RANDOM = 5;
        $provider_id = ['123456789101112', '123456789101113', '123456789101114', '123456789101115', '123456789101116'];
        $procider_name = ['Steve Job', 'Mark', 'John Smith', 'Adle', 'Bruno Mars'];
        $nickname = ['ab', 'bc', 'cd', 'de', 'ef'];
        for($i = 0 ; $i < $MAX_RANDOM ; $i++){
            DB::table('users')->insert([
                'provider_id' => $provider_id[$i],
                'provider_name' => $procider_name[$i],
                'nickname' => $nickname[$i],
            ]);
        }
    }
}
