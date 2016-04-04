function FindProxyForURL(url, host) {
	if (shExpMatch(host, "library.books24x7.com"))
	{
		return "PROXY 210.245.80.74:3128";
	}

	return "DIRECT";
}