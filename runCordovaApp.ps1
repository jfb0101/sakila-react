$reactAppPath = $PSScriptRoot
$cordovaAppPath = "E:\puc\iot\projetos\SakilaCordova"

yarn --cwd $reactAppPath build

remove-item -force -recurse $cordovaAppPath\www

new-item -ItemType Directory $cordovaAppPath\www

copy-item -recurse $reactAppPath\build\* $cordovaAppPath\www\

npm run android --prefix $cordovaAppPath 