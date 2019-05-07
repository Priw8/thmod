{
	"binhacks": {
		"ins_799_byteptr": {
			"expected": "AB",
			"code": "B8",
			"addr": "0x0042502B",
			"title": "define ins_799 byte pointer"
		},
		"ins_799_jmp": {
			"expected": "AB AB AB AB",
			"code": "AD 6F 49 00",
			"addr": "0x00424E68",
			"title": "define ins_799 jmp offset"
		},
		"ins_799_code": {
			"expected": "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00",
			"code": "51 52 52 8B CF 8D B7 74 3F 00 00 E8 E6 0B F9 FF 5A 59 C3 8B 0D 88 1D 52 00 31 D2 E8 E0 FF FF FF 01 C1 42 E8 D8 FF FF FF 89 41 10 42 E8 CF FF FF FF 89 41 18 42 E8 C6 FF FF FF 89 41 1C E9 8A DB F8 FF",
			"addr": "0x00496F9A",
			"title": "code of ins_799 (used for changing music the stage uses from an ECL script)"
		},
		"8_lives": {
			"expected": "02",
			"code": "08",
			"addr": "0x0042F155",
			"title": "set starting lives to 8 instead of 2"
		},
		"0_power": {
			"expected": "A1 90 16 4B 00",
			"code": "B8 00 00 00 00",
			"addr": "0x0042F1C1",
			"title": "set starting power to 0"
		}
	}
}