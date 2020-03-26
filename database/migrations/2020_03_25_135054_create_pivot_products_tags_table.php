<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePivotProductsTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_tag', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('tag_id');
            $table->timestamps();

            $table->unique(['product_id', 'tag_id']);

            $table->foreign('product_id')
                ->references('id')
                ->on('products')
                ->onDelete('cascade');

            $table->foreign('tag_id')
                ->references('id')
                ->on('tags')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pivot_products_tags');
    }
}
