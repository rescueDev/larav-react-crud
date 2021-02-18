<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{

    public function index()
    {
        $users = User::all();
        return $users->toJson();
    }
    public function show($id)
    {
        $user = User::findOrFail($id);
        // dd($user);
        return $user->toJson();
    }
    public function create()
    {
    }
    public function store(Request $request)
    {

        return User::create($request->all());
    }
}
