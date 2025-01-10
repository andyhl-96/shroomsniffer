package com.shroomsniffer; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

import java.lang.annotation.Repeatable;

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
        return "test text";
    }

    @ReactMethod
    public String infer(String img64) {
        Python py = Python.getInstance();
        PyObject bi = py.getBuiltins();
        PyObject inf = py.getModule("inference");
        PyObject out = inf.callAttr("load_and_run", img64);
        //PyObject out = inf.callAttr("test");
        return out.toString();
    }
}

