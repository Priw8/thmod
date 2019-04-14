{
	"binhacks": {
		"no_score_extends": {
			"expected": "20A10700",
			"code": "00CA9A3B",
			"addr": "0x00491880",
			"title": "Disables score extends in the maingame"
		},
		"no_score_extends_ex": {
			"expected": "40420F00",
			"code": "00CA9A3B",
			"addr": "0x004917C4",
			"title": "Disables score extends on the extra stage"
		},
		"max_item_value": {
			"expected": "F30F108F14060000",
			"code": "0F57C99090909090",
			"addr": "0x00430652",
			"title": "Items are collected with max value everywhere on the screen"
		},
		"ins_999_byteptr": {
			"expected": "AD",
			"code": "B9",
			"addr": "0x0042302B",
			"title": "Set byte pointer for ins_999"
		},
		"ins_999_jmptable": {
			"expected": "ADADADAD",
			"code": "DAAC4800",
			"addr": "0x00422D9C",
			"title": "Define jump adress for ins_999"
		},
		"ins_999_code": {
			"expected": "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00",
			"code": "6A 00 8B CF E8 ED A4 F9 FF A3 C8 57 4A 00 E9 AE 7D F9 FF",
			"addr": "0x0048ACDA",
			"title": "Assembly code of ins_999. Takes 1 argument and sets ECL variable [-9907] ($SPELL_ID) to it (the variable is read-only normally). Used to transfer data from 1 stage to another, as the value doesn't get reset."
		},
		"ins_998_byteptr": {
			"expected": "AD",
			"code": "BA",
			"addr": "0x0042302A",
			"title": "Set byte pointer for ins_998"
		},
		"ins_998_jmptable": {
			"expected": "ADADADAD",
			"code": "EDAC4800",
			"addr": "0x00422DA0",
			"title": "Define jump adress for ins_998"
		},
		"ins_998_code": {
			"expected": "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00",
			"code": "A1 F4 57 4A 00 A3 CC 57 4A 00 E9 9F 7D F9 FF",
			"addr": "0x0048ACED",
			"title": "Assembly code of ins_998. Takes no arguments, sets ECL variable [-9704] ($MISS_COUNT_GLOBAL) to player's current lives."
		},
		"prac_8_lives": {
			"expected": "09",
			"code": "08",
			"addr": "0x0042CE09",
			"title": "Fix getting 9 lives in practice instead of 8"
		}
	},
	"title": "Undefined Fantastic Four Seasons"
}