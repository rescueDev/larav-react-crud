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
    public function create($id)
    {
        $user = User::findOrFail($id);
        // dd($user);
        return $user->toJson();
    }
    public function store(Request $request)
    {

        return User::create($request->all());
    }
    public function update(Request $request, $id)
    {
        // dd($request->all());
        $editUser = User::findOrFail($id);
        $editUser->update($request->all());
        // dd($editUser);
        return $editUser->toJson();
    }
    public function destroy($id)
    {
        User::destroy($id);

        return response()->json('User Deleted', 200);
    }
}
