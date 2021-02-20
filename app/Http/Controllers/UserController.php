<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Passport;


class UserController extends Controller
{

    public function index()
    {
        $users = User::orderBy('created_at', 'desc')->get();


        return $users->toJson();
    }
    public function show($id)
    {
        $user = User::findOrFail($id);
        $passport = $user->passport;
        if (!$passport) {

            return response()->json($user);
        }

        return response()->json([
            'name' => $user['name'],
            'email' => $user['email'],

            'passport_number' => $passport['passport_number'],
            'exp_date' => $passport['exp_date'],
            'country_code' => $passport['country_code'],

        ]);
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

    public function restore(Request $request)
    {
        $data = $request->all();
        // dd($data);
        $name = $data['name'];
        $email = $data['email'];

        User::where([['name', $name], ['email', $email]])->restore();
        return response()->json('User Restored');
    }
}
