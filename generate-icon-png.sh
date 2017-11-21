#!/bin/bash

set -e

cd $(dirname $0)

icon() {
	local size=$1
	inkscape -z -f icon.svg -e icons/$size.png --export-area-page --export-width=$size --export-height=$size
}

icon 16
icon 32
icon 48
icon 64
icon 96
