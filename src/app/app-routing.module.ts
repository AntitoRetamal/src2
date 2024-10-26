import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//usamos el guard autenticacion 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'first-page',  // mostramos como pagina principal en vez de home al recargar o entrar a la
    pathMatch: 'full'
  },
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then(
      m => m.SecondPagePageModule)
  },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPagePageModule)
  },
  {
    path: 'third-page',
    loadChildren: () => import('./third-page/third-page.module').then(m => m.ThirdPagePageModule)
  },
  {
    path: 'fourth-page',
    loadChildren: () => import('./fourth-page/fourth-page.module').then(m => m.FourthPagePageModule)
  },
  {
    path: 'five-page',
    loadChildren: () => import('./five-page/five-page.module').then(m => m.FivePagePageModule)
  },
  {
    path: 'six-page',
    loadChildren: () => import('./six-page/six-page.module').then(m => m.SixPagePageModule)
  },
  {
    path: 'seven-page',
    loadChildren: () => import('./seven-page/seven-page.module').then(m => m.SevenPagePageModule)
  },
  {
    path: '*',//asi un usuario intenta ingresar a cualquier ruta llevara a esta pagina
    loadChildren: () => import('./no-encontrado/no-encontrado.module').then(m => m.NoEncontradoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
