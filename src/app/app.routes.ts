import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { PlayWithFriendsComponent } from "./components/play-with-friends/play-with-friends.component";
import { PlayOnlineComponent } from "./components/play-online/play-online.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "play",
        component: MainMenuComponent,
    },
    {
        path: "play/friends",
        component: PlayWithFriendsComponent,
    },
    {
        path: "play/online",
        component: PlayOnlineComponent,
    },
];
