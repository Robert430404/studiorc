<?php

namespace App\Console\Commands;

use App;
use App\User;
use Illuminate\Console\Command;

class MakeUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:user {name : Full Name} {email : User Email} {password : User Password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Makes A User Account To Insert Work';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $name  = $this->argument('name');
        $email = $this->argument('email');
        $pass  = $this->argument('password');

        User::create([
            'name'     => $name,
            'email'    => $email,
            'password' => bcrypt($pass),
        ]);

        $this->info('The User Has Been Made Successfully');
    }
}
