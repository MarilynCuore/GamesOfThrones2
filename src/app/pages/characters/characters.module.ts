import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersComponent } from "./characters.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { SwiperModule } from "ngx-swiper-wrapper";
const routes: Routes = [{ path: "", component: CharactersComponent }];
@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    RouterModule.forChild(routes)
  ]
})
export class CharactersModule {}
