DIR=./build
if [ -d "$DIR" ];
then
    echo "$DIR directory exists.\nErasing content"
    rm -rf ./build
else
	echo "$DIR directory does not exist."
fi

tsc