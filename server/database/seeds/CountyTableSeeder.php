<?php

use App\County;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class CountyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('counties')->delete();
        $json = File::get("./database/data/county.json");
        $data = json_decode($json);
        foreach($data as $county){
            County::create(array(
                'name' => $county->name,
                'id' => $county->id,
            ));
        }
    }
}
