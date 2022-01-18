import { Router } from 'express';
class IndexRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
this.router.get('/',(req,res) => res.send('probando ruta'));
this.router.get('/instituto/',(req,res) => res.send('probando instituto'));
}
}
const indexRoutes= new IndexRoutes();
export default indexRoutes.router;
