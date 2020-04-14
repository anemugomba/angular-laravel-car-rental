## Angular and laravel simple car rental application.
This is a car rental website and admin panel. Visitors can go on to a website, browse a catalog of vehicles, leave their contact information and checkout. The site admin gets an email with the user details and vehicle of choice and gets to contact them if they so wish.
Within the admin panel, the site admin can create/view/update/delete vehicles that appear on the site.

## Motivation
This project is meant to help out those starting with angular and laravel on how to integrate the two to make beautiful, fast and responsive applications. It is a "getting started" with laravel and angular project that goes beyond a "hello world" application.
 
## Screenshots
![Image of 1](https://i.imgur.com/lIm0lmg.png)
![Image of 1](https://i.imgur.com/ZBrFPTz.png)
![Image of 1](https://i.imgur.com/Id63pEj.png)

## Tech/framework used
Ex. -

<b>Built with</b>
- [Angular](https://angular.io/)
- [Laravel](https://laravel.com/)
- [Creative Tim](https://www.creative-tim.com/)

## Code Example
```
public function delete(Request $request){

        $car = Car::findOrFail($request->id);

            $image_path = public_path().'/img/'.$car->img_name;

            if(file_exists ($image_path)) {
               unlink($image_path);
                }

                $car -> delete();
        return response()->json(['vehicle deleted'], Response::HTTP_ACCEPTED);

    }
```
## Installation
Make sure PHP >= 7.2.5
After downloading project. Place yarutso-laravel folder in your development folder e.g. htdocs for xampp.(Installation process assumes you have a knowledge of laravel and composer and you have these already set up)
Navigate into yarutso-laravel and run the following commands
  - create DB and place db details in your env file.
  - composer install
  - php artisan key:generate
  - php artisan jwt:secret
  - php artisan migrate
  - php artisan db:seed --class=UserSeeder (this will create a user for you to login into the admin - [username is admin@gmail.com & password is password]
  
The next step is to navigate into the yarutso-ng folder. Folder contains angular code. 
 - go to \yarutso-ng\src\environments\environments.ts
 - within the environments.ts file change the following
```
export const environment = {
  production: false,
  apiUrlBase: 'http://localhost/[path to your laravel project]/public/'
};

/*
an example is  apiUrlBase: 'http://localhost/angular-laravel-car-rental/yarutso-laravel/public/'
*/
```
 - run npm install in your angular base folder
 - run ng serve
With thes steps you shoud be good to go.

## How to use?
To Navigate to the admin portal go to http://localhost:4200/admin/login


## Credits
-[Bitfumes](https://www.youtube.com/watch?v=CtklHQUfNZQ)  (Laravel Angular Authentication with JWT)

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [anemugomba](https://github.com/anemugomba/angular-laravel-car-rental/)
