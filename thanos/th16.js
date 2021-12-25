{
	"codecaves": {
		"Priw8_thanos": {
			"code": "C7 85 C8 FB FF FF 88 00 00 00 83 F8 0C 0F 8E CF 00 00 00 83 F8 15 0F 84 C6 00 00 00 83 F8 64 0F 84 BD 00 00 00 3D CA 00 00 00 0F 84 B2 00 00 00 3D CB 00 00 00 0F 84 A7 00 00 00 3D CC 00 00 00 0F 84 9C 00 00 00 3D D3 00 00 00 0F 8C 0B 00 00 00 3D D7 00 00 00 0F 8E 86 00 00 00 3D DA 00 00 00 0F 8C 0B 00 00 00 3D F1 00 00 00 0F 8E 70 00 00 00 3D 00 01 00 00 0F 84 65 00 00 00 3D 2C 01 00 00 0F 84 5A 00 00 00 3D 2D 01 00 00 0F 84 4F 00 00 00 3D 30 01 00 00 0F 84 44 00 00 00 3D 32 01 00 00 0F 84 39 00 00 00 3D 45 01 00 00 0F 84 2E 00 00 00 3D 90 01 00 00 0F 84 23 00 00 00 3D 91 01 00 00 0F 84 18 00 00 00 50 E8 20 00 00 00 3D FF FF FF 7F 0F 82 06 00 00 00 58 E9 [Rx22A9B] 58 0F B6 80 70 2D 42 00 FF 24 85 B8 2A 42 00 53 A1 D0 57 4A 00 83 F8 00 0F 85 01 00 00 00 40 8B D8 C1 E3 09 31 D8 8B D8 C1 EB 07 31 D8 8B D8 C1 E3 0D 31 D8 A3 D0 57 4A 00 5B C3",
			"access": "re",
			"title": "50% to skip most instructions"
		}
	},
	"binhacks": {
		"codecave_jmp": {
			"expected": "0F B6 80 70 2D 42 00",
			"code": "E9 [codecave:Priw8_thanos] 90 90",
			"addr": "0x0041DD40",
			"title": "jump to the codecave"
		}
	},
	"title": "東方天空璋　～ Hidden Star in Two Seasons"
}