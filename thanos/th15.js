{
	"codecaves": {
		"Priw8_thanos": {
			"code": "83 F8 0C 0F 8E CF 00 00 00 83 F8 15 0F 84 C6 00 00 00 83 F8 64 0F 84 BD 00 00 00 3D CA 00 00 00 0F 84 B2 00 00 00 3D CB 00 00 00 0F 84 A7 00 00 00 3D CC 00 00 00 0F 84 9C 00 00 00 3D D3 00 00 00 0F 8C 0B 00 00 00 3D D7 00 00 00 0F 8E 86 00 00 00 3D DA 00 00 00 0F 8C 0B 00 00 00 3D F1 00 00 00 0F 8E 70 00 00 00 3D 00 01 00 00 0F 84 65 00 00 00 3D 2C 01 00 00 0F 84 5A 00 00 00 3D 2D 01 00 00 0F 84 4F 00 00 00 3D 30 01 00 00 0F 84 44 00 00 00 3D 32 01 00 00 0F 84 39 00 00 00 3D 45 01 00 00 0F 84 2E 00 00 00 3D 90 01 00 00 0F 84 23 00 00 00 3D 91 01 00 00 0F 84 18 00 00 00 50 E8 20 00 00 00 3D FF FF FF 7F 0F 82 06 00 00 00 58 E9 [Rx2DBA7] 58 0F B6 80 78 DE 42 00 FF 24 85 CC DB 42 00 53 A1 30 74 4E 00 83 F8 00 0F 85 01 00 00 00 40 8B D8 C1 E3 09 31 D8 8B D8 C1 EB 07 31 D8 8B D8 C1 E3 0D 31 D8 A3 30 74 4E 00 5B C3",
			"access": "re",
			"title": "50% to skip most instructions"
		}
	},
	"binhacks": {
		"codecave_jmp": {
			"expected": "0F B6 80 78 DE 42 00",
			"code": "E9 [codecave:Priw8_thanos] 90 90",
			"addr": "0x0042927C",
			"title": "jump to the codecave"
		}
	},
	"title": "東方紺珠伝　～ Legacy Kingdom"
}