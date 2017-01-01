#!/bin/bash
echo 'zerando as portas gpio da casa'
gpio mode 0 out; sleep .5
gpio write 0 0; sleep 1
gpio mode 0 in; sleep .5

gpio mode 1 out; sleep .5
gpio write 1 0; sleep 1
gpio mode 1 in; sleep .5

gpio mode 2 out; sleep .5
gpio write 2 0; sleep 1
gpio mode 2 in; sleep .5

gpio mode 3 out; sleep .5
gpio write 3 0; sleep 1
gpio mode 3 in; sleep .5

gpio mode 4 out; sleep .5
gpio write 4 0; sleep 1
gpio mode 4 in; sleep .5

gpio mode 5 out; sleep .5
gpio write 5 0; sleep 1
gpio mode 5 in; sleep .5

gpio mode 6 out; sleep .5
gpio write 6 0; sleep 1
gpio mode 6 in; sleep .5

gpio mode 7 out; sleep .5
gpio write 7 0; sleep 1
gpio mode 7 in; sleep .5

gpio mode 21 out; sleep .5
gpio write 21 0; sleep 1
gpio mode 21 in; sleep .5

gpio mode 22 out; sleep .5
gpio write 22 0; sleep 1
gpio mode 22 in; sleep .5

gpio mode 23 out; sleep .5
gpio write 23 0; sleep 1
gpio mode 23 in; sleep .5

gpio mode 24 out; sleep .5
gpio write 24 0; sleep 1
gpio mode 24 in; sleep .5

gpio mode 25 out; sleep .5
gpio write 25 0; sleep 1
gpio mode 25 in; sleep .5

gpio mode 26 out; sleep .5
gpio write 26 0; sleep 1
gpio mode 26 in; sleep .5

gpio mode 27 out; sleep .5
gpio write 27 0; sleep 1
gpio mode 27 in; sleep .5

gpio mode 28 out; sleep .5
gpio write 28 0; sleep 1
gpio mode 28 in; sleep .5

gpio mode 29 out; sleep .5
gpio write 29 0; sleep 1
gpio mode 29 in; sleep .5

