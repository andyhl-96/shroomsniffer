package com.shroomsniffer; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;
import com.chaquo.python.*;

public class PythonModule extends ReactContextBaseJavaModule {
    PythonModule(ReactApplicationContext context) {
        super(context);
    }
    @Override
    public String getName() {
        return "PythonModule";
    }

    @ReactMethod
    public String test() {
        //Log.d("Shit");
        return "shit";
    }
}

