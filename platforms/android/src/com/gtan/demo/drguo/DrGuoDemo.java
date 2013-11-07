/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.gtan.demo.drguo;

import android.os.Bundle;
import android.content.res.Configuration;
import android.view.*;
import android.widget.LinearLayout;
import org.apache.cordova.*;

public class DrGuoDemo extends CordovaActivity 
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.init();
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl(), 6000);
        //super.loadUrl("file:///android_asset/www/index.html")
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
      super.onConfigurationChanged(newConfig);

      if (super.splashDialog != null) {
        ViewGroup rootView = (ViewGroup) super.splashDialog.getWindow()
                .getDecorView().findViewById(android.R.id.content);
        LinearLayout linearLayout = (LinearLayout) rootView.getChildAt(0);
        // manually refresh the splash image
        linearLayout.setBackgroundDrawable(null);
        linearLayout.setBackgroundResource(R.drawable.splash);
      }
    }
}

