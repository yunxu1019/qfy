rm -rf qfy
efront build

echo build ok
mv public qfy
echo copy to server
rsync -ru --progress qfy   root@efront.cc:/wow
# scp -r qfy root@efront.cc:/wow
echo done
