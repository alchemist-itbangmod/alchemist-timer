<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class RoomTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $MAX_RANDOM = 5;
        $DATE_TIME = '2018-10-30 21';
        $DATE_FORMAT = 'Y-m-d H';
        $EXPECT_TIMESTAMP = Carbon::createFromFormat($DATE_FORMAT, $DATE_TIME)->toDateTimeString();
        $ROOM_NAME = ['CB2301', 'CB2302', 'CB2303', 'CB2304', 'CB2305'];
        $ROOM_CODE = ['RM2301', 'RM2302', 'RM2303', 'RM2304', 'RM2305'];
        for($i=0;$i< $MAX_RANDOM;$i++){
            DB::table('rooms')->insert([
                'room_name' => $ROOM_NAME[$i],
                'room_code' => $ROOM_CODE[$i],
                'time_current' => $EXPECT_TIMESTAMP,
                'user_id' => ($i+1),
            ]);
        }
    }
}
