---
title: "How To Download Videos on Udemy Using youtube-dl"
date: 2021-01-29T00:23:34Z
draft: true
authors:
  - Hendry Khoza
---

If you are like me the reason you choose udemy as a leaning platform is
bbecause of their insane discount on cources, but that serve nothing if you are
from a country where data bundles cost are so high like in South Africa. You
add up pay more to access the course online than the actual cost of the course.
I wont even begin to mention the issue of slow network speed. One solution from
this is to download the videos from your course and watch them offline, I am
gonna show you just that.

<!--more-->

First off we need to download youtube-dl. If you are using Arch Linux
like me just run the following command from your terminal

`command lets see`

If you are using another operating system other than Arch based distro
follow the instruction from youtube-dl main reposotory on how to install
youtube-dl according to your operating system.

We also need to download cookie.txt a browswe extesion from firefox
extesion store. I recommed you use Firefox as is the same browser I usd
when writing this tutorials.

Lets create a folder where we want to save our download videos. you can
name the folder whatever you like. I choose to name mine `ex-udemmy`

`mkdir ~/videos/ex-udemmy`

Now go to udemmy.com and login as usually. Once you login click on the
cookie.txt extesion icon on your firefox, then clink current site.
A popup window will appear asking you where do you want to save the file
. Save the file as cookie.txt on the folder we just create above

before you close your browser, Go to the course which you whant to download
their videos. copy the URL of the course. usually when you copy the URL
it will apper as something like this `URL example` you need to remove
the `course/` before the course name and also remove everything after
the course name. after this, the URL should look something like this.

`<URL examoles>`

When done, Open a terminal and navigate to the folder you saved your
cookies.txt. in my case thats `ex-udemy`

`cd ~/videos/ex-udemy`

Now to download videos from your course you need to run the following
from your terminal

`youtube-dl -cookie cookie.xt 'url' `

This command it will download all videos from your course. In most case
you don't want all videos, That would take time and as we mention, if you
have slow connection is more likely to not finish. Its best to specify
where you shoud start downloading and where should stop using the `--playlist-start`
and `--playlist-stop` flags. like this

`youtube-dl -cookie cookie.xt 'url' `

if you notice, the videos that are download are not organise, and it is
hard to follow when it is like that. so what you can to is add the
foolowing at the add of the command `-o "..."` making the whole command
looking like this

`youtube-dl -cookie cookie.xt 'url' `

with this, you can continue learning from any part of the world and
regardless of internet speed.
