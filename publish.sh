#!/usr/bin/env bash
cd build/production/android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 release-unsigned.apk action-scan
 Scan
