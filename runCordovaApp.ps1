$reactAppPath = $PSScriptRoot
$cordovaAppPath = "E:\puc\iot\projetos\SakilaCordova"

npm run build --prefix $reactAppPath

remove-item -force -recurse $cordovaAppPath\www

new-item -ItemType Directory $cordovaAppPath\www

copy-item $reactAppPath\build\* $cordovaAppPath\www\