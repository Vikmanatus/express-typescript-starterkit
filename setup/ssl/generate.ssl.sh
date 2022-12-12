#!/bin/bash
DIR=./certs
if [ -d "$DIR" ];
then
    echo "$DIR directory exists.\nErasing content"
    rm -rf ./certs
    mkdir certs
else
	echo "$DIR directory does not exist."
    mkdir certs
fi

cd ./certs

openssl genrsa -out dev-key.pem
openssl req -new -key dev-key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey dev-key.pem -out cert.pem

rm csr.pem