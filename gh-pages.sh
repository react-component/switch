npm run less
npm run example
cd ../switch-gh-pages
rm -rf build/
mkdir build
cp -r ../switch/build/ build
git add --all
git commit -am "update examples"
git push origin gh-pages:gh-pages