{
	"codecaves": {
		"Priw8_th15slippery": {
			"code": "51 50 52 56 50 51 6A 18 E8 35 00 00 00 01 05 <codecave:Priw8_th15slippery_state> 58 50 6A 18 E8 26 00 00 00 01 05 <codecave:Priw8_th15slippery_state+4> 8B 0D <codecave:Priw8_th15slippery_state> A1 <codecave:Priw8_th15slippery_state+4> 01 8F 24 06 00 00 01 87 28 06 00 00 5E 5A 58 59 E9 [Rx54583] 5E 59 58 31 D2 83 F8 00 0F 8D 05 00 00 00 BA FF FF FF FF F7 F9 56 C3 89 81 28 06 00 00 C7 05 <codecave:Priw8_th15slippery_state> 00 00 00 00 C7 05 <codecave:Priw8_th15slippery_state+4> 00 00 00 00 E9 [Rx52F7B] C7 05 <codecave:Priw8_th15slippery_state> 00 00 00 00 C7 87 24 06 00 00 00 A4 FF FF C3 C7 05 <codecave:Priw8_th15slippery_state> 00 00 00 00 C7 87 24 06 00 00 00 5C 00 00 C3 C7 05 <codecave:Priw8_th15slippery_state+4> 00 00 00 00 C7 87 28 06 00 00 00 10 00 00 C3 C7 05 <codecave:Priw8_th15slippery_state+4> 00 00 00 00 C7 87 28 06 00 00 00 D8 00 00 C3",
			"access": "re"
		},
		"Priw8_th15slippery_state": {
			"size": 8,
			"access": "rw"
		}
	},
	"binhacks": {
		"codecave_jmp_1": {
			"expected": "01 8F 24 06 00 00",
			"code": "E9 [codecave:Priw8_th15slippery] 90",
			"addr": "0x00454577",
			"title": "jump to codecave 1"
		},
		"codecave_jmp_2": {
			"expected": "89 81 28 06 00 00",
			"code": "E9 [codecave:Priw8_th15slippery+0x59]",
			"addr": "0x00452F75",
			"title": "jump to codecave 2"
		},
		"codecave_call_1": {
			"expected": "C7 87 24 06 00 00 00 A4 FF FF",
			"code": "90 90 90 90 90 E8 [codecave:Priw8_th15slippery+0x78]",
			"addr": "0x00454590",
			"title": "call codecave sub 1"
		},
		"codecave_call_2": {
			"expected": "C7 87 24 06 00 00 00 5C 00 00",
			"code": "90 90 90 90 90 E8 [codecave:Priw8_th15slippery+0x8D]",
			"addr": "0x004545A3",
			"title": "call codecave sub 2"
		},
		"codecave_call_3": {
			"expected": "C7 87 28 06 00 00 00 10 00 00",
			"code": "90 90 90 90 90 E8 [codecave:Priw8_th15slippery+0xA2]",
			"addr": "0x004545BA",
			"title": "call codecave sub 3"
		},
		"codecave_call_4": {
			"expected": "C7 87 28 06 00 00 00 D8 00 00",
			"code": "90 90 90 90 90 E8 [codecave:Priw8_th15slippery+0xB7]",
			"addr": "0x004545CD",
			"title": "call codecave sub 4"
		}
	},
	"title": "東方紺珠伝　～ Legacy of Slippery Kingdom"
}