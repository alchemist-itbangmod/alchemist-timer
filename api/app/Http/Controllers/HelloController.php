<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function getHello(Request $request) {
        $data = $request->all();
        return "hello";
    }
}
