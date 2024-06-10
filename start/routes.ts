/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from "@adonisjs/core/services/router";
import HomeController from "#controllers/home_controller";

router.get("/", [HomeController, "index"]);
//router.on('/').renderInertia('home', { version: 6 })
