#!/bin/bash

echo "install service"
mv node_demo.service  /lib/systemd/system/node_demo.service
sudo systemctl daemon-reload
