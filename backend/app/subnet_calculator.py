import ipaddress
from typing import Dict, List, Union

class SubnetCalculator:
    @staticmethod
    def calculate_subnet(ip: str, prefix_or_mask: Union[int, str]) -> Dict:
        try:
            if '/' in ip:
                network = ipaddress.ip_network(ip, strict=False)
            else:
                if isinstance(prefix_or_mask, int):
                    network = ipaddress.ip_network(f"{ip}/{prefix_or_mask}", strict=False)
                else:
                    network = ipaddress.ip_network(f"{ip}/{prefix_or_mask}", strict=False)
            
            return {
                "ip_address": str(network.network_address),
                "subnet_mask": str(network.netmask),
                "wildcard_mask": str(network.hostmask),
                "network_address": str(network.network_address),
                "broadcast_address": str(network.broadcast_address),
                "first_host": str(network.network_address + 1) if network.num_addresses > 2 else "N/A",
                "last_host": str(network.broadcast_address - 1) if network.num_addresses > 2 else "N/A",
                "total_hosts": network.num_addresses,
                "usable_hosts": max(network.num_addresses - 2, 0) if network.num_addresses > 2 else network.num_addresses,
                "prefix_length": network.prefixlen,
                "ip_version": network.version,
                "ip_class": SubnetCalculator._get_ip_class(network),
                "subnets": []
            }
        except ValueError as e:
            return {"error": str(e)}
    
    @staticmethod
    def calculate_subnetting(network: str, new_prefix: int) -> Dict:
        try:
            parent_network = ipaddress.ip_network(network, strict=False)
            if new_prefix <= parent_network.prefixlen:
                return {"error": "New prefix must be larger than the original network prefix"}
            
            subnets = list(parent_network.subnets(new_prefix=new_prefix))
            
            result = {
                "original_network": str(parent_network),
                "new_prefix": new_prefix,
                "subnets_count": len(subnets),
                "subnets": [{
                    "subnet": str(subnet),
                    "network_address": str(subnet.network_address),
                    "broadcast_address": str(subnet.broadcast_address),
                    "usable_hosts": subnet.num_addresses - 2,
                    "range": f"{subnet.network_address + 1} - {subnet.broadcast_address - 1}"
                } for subnet in subnets]
            }
            return result
        except ValueError as e:
            return {"error": str(e)}
    
    @staticmethod
    def _get_ip_class(network: ipaddress.IPv4Network) -> str:
        first_octet = int(str(network.network_address).split('.')[0])
        if first_octet < 128:
            return "A"
        elif first_octet < 192:
            return "B"
        elif first_octet < 224:
            return "C"
        elif first_octet < 240:
            return "D (Multicast)"
        else:
            return "E (Reserved)"