<?php

namespace App\Http\Controllers;

use App\Passport;
use Illuminate\Http\Request;

class PassportController extends Controller
{
    public function index()
    {
        $passports = Passport::all();
        return $passports->toJson();
    }
    public function show($id)
    {
        $passport = Passport::findOrFail($id);
        // dd($user);
        return $passport->toJson();
    }
    public function create()
    {
    }
    public function store()
    {
    }
}
