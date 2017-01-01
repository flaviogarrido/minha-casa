#!/bin/bash
echo 'zerando (com 1) as portas gpio da casa'
gpio mode 0 out
gpio write 0 1
gpio mode 0 in

gpio mode 1 out
gpio write 1 1
gpio mode 1 in

gpio mode 2 out
gpio write 2 1
gpio mode 2 in

gpio mode 3 out
gpio write 3 1
gpio mode 3 in

gpio mode 4 out
gpio write 4 1
gpio mode 4 in

gpio mode 5 out
gpio write 5 1
gpio mode 5 in

gpio mode 6 out
gpio write 6 1
gpio mode 6 in

gpio mode 7 out
gpio write 7 1
gpio mode 7 in

gpio mode 21 out
gpio write 21 1
gpio mode 21 in

gpio mode 22 out
gpio write 22 1
gpio mode 22 in

gpio mode 23 out
gpio write 23 1
gpio mode 23 in

gpio mode 24 out
gpio write 24 1
gpio mode 24 in

gpio mode 25 out
gpio write 25 1
gpio mode 25 in

gpio mode 26 out
gpio write 26 1
gpio mode 26 in

gpio mode 27 out
gpio write 27 1
gpio mode 27 in

gpio mode 28 out
gpio write 28 1
gpio mode 28 in

gpio mode 29 out
gpio write 29 1
gpio mode 29 in


