<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Home', ['name' => 'Sadboiz IT']);
//});

//Route::inertia('/', 'Home');

//Route::get('/about', function () {
//    return Inertia::render('About/About');
//});

Route::get('/', [App\Http\Controllers\PostController::class, 'index'])->name('posts.index');

Route::resource('posts', \App\Http\Controllers\PostController::class)->except(['index']);
