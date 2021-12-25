{
	"codecaves": {
		"Priw8_th15garbo_code": {
			"code": "50 E8 37 00 00 00 52 53 BA 00 00 00 00 BB 29 00 00 00 F7 F3 8B C2 5B 5A 40 89 06 48 51 8B C8 8A 89 <codecave:Priw8_th15garbo_bullet_color_table> E8 13 00 00 00 20 C8 59 88 46 04 58 66 89 87 92 14 00 00 E9 [Rx1ad3d] 51 B9 48 9A 4E 00 E8 [Rx36A0] 25 FF FF FF 7F 59 C3 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 01 07 07 07 07 07 07 07 00 00 00 00 07 07 07 03 07 0F 0F 0F 0F 0F 00 00 00 00 07",
			"access": "re"
		},
		"Priw8_th15garbo_bullet_color_table": {
			"code": "0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 0F 01 07 07 07 07 07 07 07 00 00 00 00 07 07 07 03 07 0F 0F 0F 0F 0F 00 00 00 00 07",
			"access": "r"
		}
	},
	"binhacks": {
		"hook": {
			"addr": "0x0041AD36",
			"code": "E9 [codecave:Priw8_th15garbo_code] 90 90",
			"title": "Jump to custom code before every bullet shot"
		}
	}
}