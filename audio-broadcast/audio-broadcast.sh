#!/bin/sh
if ps -ef | grep -v grep | grep vlc ; then
        exit 0
else
	#sudo service ntp stop
	#sudo service triggerhappy stop
	#sudo service dbus stop
	#cvlc -vvv alsa://hw:1,0 --no-sout-video --sout='#transcode{acodec=opus,ab=32,channels=1,samplerate=48000}:rtp{sdp=rtsp://192.168.0.99:5001/live.sdp}'&
	cvlc -vvv alsa://hw:1,0 --no-sout-video --sout='#transcode{acodec=opus,ab=32,channels=1,samplerate=48000}:rtp{sdp=rtsp://10.0.164.100:5001/live.sdp}'&
        exit 0
fi
