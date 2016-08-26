packageName="us.originally.hoicard"
apkName="app-prod-debug.apk"
artifactPath="app/build/outputs/apk/" ///http://192.168.1.100:8080/job/hoipos-android/lastSuccessfulBuild/artifact/
root + artifactPath + apkName = http://192.168.1.100:8080/job/hoipos-android/lastSuccessfulBuild/artifact/app/build/outputs/apk/app-prod-debug.apk

export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH

echo "Working directory"
pwd
echo "PATH"
echo ${PATH}

packageName="us.originally.hoicard"
apkName="app-release.apk"
artifactPath="app/build/outputs/apk/"


deviceIds=( $(adb devices | grep -o '\b[a-f0-9]\+\b') )
numDevices=${#deviceIds[@]}
echo "ADB found ${numDevices} devices attached"
if (( ${numDevices} < 1 )); then
	echo "No ADB devices found"	
    exit 1
fi

#Install on 1 device only
#deviceId=${deviceIds[0]}
#adb -s ${deviceId} shell pm uninstall ${packageName}
#echo "Installing app on ${deviceId}"
#adb -s ${deviceId} install -r ${artifactPath}${apkName}
#adb -s ${deviceId} shell monkey -p ${packageName} -c #android.intent.category.LAUNCHER 1

#Install on all devices
for deviceId in "${deviceIds[@]}"
do
   echo "Un-Installing app on ${deviceId}"
   adb -s ${deviceId} shell pm uninstall ${packageName}
   echo "Installing app on ${deviceId}"
   adb -s ${deviceId} install -r ${artifactPath}${apkName}
   adb -s ${deviceId} shell monkey -p ${packageName} -c android.intent.category.LAUNCHER 1
done