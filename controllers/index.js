const express=require('express')
var router=express.Router()
var client=require('../db/db.js')


router.get('/',(req,res)=>{
  //res.redirect('/list')
  res.render("elements/index", { viewTitle: 'FilmWire' });
})

router.get('/detail', (req, res) => {
  //res.redirect('/list')
  res.render("elements/detail", { viewTitle: 'FilmWire' });
})


router.get('/favourite', (req, res) => {
  //res.redirect('/list')
  res.render("elements/favourite", { viewTitle: 'FilmWire' });
})

router.get('/celebrities', (req, res) => {
  //res.redirect('/list')
  res.render("elements/celebrities", { viewTitle: 'FilmWire' });
})

router.get('/movies', (req, res) => {
  //res.redirect('/list')
  res.render("elements/movies", { viewTitle: 'FilmWire' });
})

router.get('/news', (req, res) => {
  //res.redirect('/list')
  res.render("elements/news", { viewTitle: 'FilmWire' });
})

router.get('/profile', (req, res) => {
  //res.redirect('/list')
  res.render("elements/profile", { viewTitle: 'FilmWire' });
})

router.get('/viewcelebrity', (req, res) => {
  //res.redirect('/list')
  res.render("elements/view_celebrity", { viewTitle: 'FilmWire' });
})


router.get('/viewfilm', (req, res) => {
  //res.redirect('/list')
  res.render("elements/view_film", { viewTitle: 'FilmWire' });
})
module.exports=router;