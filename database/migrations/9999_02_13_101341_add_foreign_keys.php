<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('passports', function (Blueprint $table) {
            $table->foreign('user_id', 'passport-user')
                ->references('id')
                ->on('users');  //nome tabella
        });

        Schema::table('posts', function (Blueprint $table) {
            $table->foreign('user_id', 'post-user')
                ->references('id')
                ->on('users');  //nome tabella
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::table('posts', function (Blueprint $table) {

            $table->dropForeign('post-user');
        });

        Schema::table('passports', function (Blueprint $table) {

            $table->dropForeign('passport-user');
        });
    }
}
