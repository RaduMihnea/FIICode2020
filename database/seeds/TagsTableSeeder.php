<?php

use App\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->delete();
        $json = File::get("./database/data/tags.json");
        $data = json_decode($json);
        foreach($data as $county){
            Tag::create(array(
                'name' => $county->name,
                'id' => $county->id,
            ));
        }
    }
}
