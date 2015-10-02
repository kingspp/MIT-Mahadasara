package com.mahadasara;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.CheckBox;
import android.widget.Toast;

public class SettingsActivity extends ActionBarActivity {
	boolean setChanged = false;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_settings);
		SharedPreferences prefs = getSharedPreferences("Preferences.xml",
				MODE_PRIVATE);
		Boolean key = prefs.getBoolean("checkbox", false);
		final CheckBox ch = (CheckBox) findViewById(R.id.checkBox);
		ch.setChecked(key);
		ch.setOnClickListener(new OnClickListener() {
			@Override
			public void onClick(View v) {
				if (ch.isChecked()) {
					writesetOn();
				} else if (!ch.isChecked()) {
					writesetoff();
				}
			}

			private void writesetoff() {
				setChanged = true;
				SharedPreferences prefs = getSharedPreferences(
						"Preferences.xml", MODE_PRIVATE);
				SharedPreferences.Editor editor = prefs.edit();
				editor.putBoolean("checkbox", false);
				editor.commit(); //
			}

			private void writesetOn() {
				setChanged = true;
				Toast.makeText(getApplicationContext(), "Enjoy Full screen",
						Toast.LENGTH_LONG).show();
				SharedPreferences prefs = getSharedPreferences(
						"Preferences.xml", MODE_PRIVATE);
				SharedPreferences.Editor editor = prefs.edit();
				editor.putBoolean("checkbox", true);
				editor.commit(); //
			}
		});
	}

	@Override
	public void onBackPressed() {
		if (setChanged = true) {
			Intent i = getBaseContext().getPackageManager()
					.getLaunchIntentForPackage(
							getBaseContext().getPackageName());
			i.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
			startActivity(i);
		}
	}
}